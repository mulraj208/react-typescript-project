import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Nav from "../components/Nav";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import {Box, Button, Input, Text, useToast} from "@chakra-ui/react";
import {useState} from "react";
import {API_ENDPOINT} from "../constants.ts";

function Todos() {
    const toast = useToast()
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

    const {mutate} = useMutation({
        mutationFn: (text: string) => {
            setTodoText('')

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
        onMutate: async (newTodo) => {
            // Cancel any outgoing refetches
            // (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({queryKey: ['todos']})

            // Snapshot the previous value
            const previousTodos = queryClient.getQueryData(['todos'])

            // Optimistically update to the new value
            queryClient.setQueryData(['todos'], () => [...previousTodos, {id: Math.random().toString(), text: newTodo}])

            // Return a context object with the snapshotted value
            return {previousTodos}
        },
        // If the mutation fails,
        // use the context returned from onMutate to roll back
        onError: (err, newTodo, context) => {
            queryClient.setQueryData(['todos'], context.previousTodos)

            toast({
                title: 'Failed to save the Todo',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })

            setTodoText(newTodo)
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ['todos']})
        }
    })

    const onSubmitTodo = (e) => {
        e.preventDefault();
        mutate(newTodoText);
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
                        value={newTodoText}
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
            </Box>
        </div>
    )
}

export default Todos;
