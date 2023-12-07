import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Nav from "../components/Nav";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {Box, Button, Flex, Input, Spinner, Text} from "@chakra-ui/react";
import {useState} from "react";
import {API_ENDPOINT} from "../constants.ts";

function Todos() {
    const queryClient = useQueryClient()
    const [newTodoText, setTodoText] = useState<string>('');
    const {isLoading, data: todos, error} = useQuery({
        queryKey: ['todos'],
        queryFn: () =>
            fetch(`${API_ENDPOINT}/todos`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
    });

    const {isPending, variables, mutate, isError} = useMutation({
        mutationFn: (text: string) => {
            return fetch(`${API_ENDPOINT}/todo`, {
                method: 'POST',
                body: JSON.stringify({text}),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }

                return res.json()
            })
        },
        onSettled: async () => {
            return await queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    const onSubmitTodo = (e) => {
        e.preventDefault();
        mutate(newTodoText);
        setTodoText('')
    };

    if (isLoading) return 'Loading...'
    if (error) return 'Something went wrong!!!'

    return (
        <div className="post-wrapper">
            <Nav/>
            <Box>
                <Box as="form" w="full" pos="relative" onSubmit={onSubmitTodo}>
                    <Input
                        name="text"
                        id="text"
                        type="text"
                        placeholder="Add Todo"
                        pr="50px"
                        onChange={e => setTodoText(e.target.value)}
                        required
                    />
                    <Button type="submit" pos="absolute" top="50%" right="0" transform="translateY(-50%)">
                        <ArrowForwardIcon/>
                    </Button>
                </Box>
            </Box>
            <Box my={6}>
                {todos && todos.map(({id, text}) => (
                    <Text key={id} py={2}>
                        {text}
                    </Text>
                ))}

                {isPending && (
                    <Flex align="center">
                        <Text opacity={0.5} mr={3}>
                            {variables}
                        </Text>
                        <Spinner/>
                    </Flex>
                )}

                {isError && (
                    <Flex align="center">
                        <Text color="red" mr={3}>{variables}</Text>
                        <Button onClick={() => mutate(variables)}>
                            Retry
                        </Button>
                    </Flex>
                )}
            </Box>
        </div>
    )
}

export default Todos;
