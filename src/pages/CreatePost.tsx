import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Button, VStack, Input, Textarea, useToast} from "@chakra-ui/react";
import Nav from "../components/Nav";
import {API_ENDPOINT} from "../constants.ts";

function CreatePost() {
    const toast = useToast()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (formData: { [index: string]: string }) => {
            return fetch(`${API_ENDPOINT}/posts`, {
                method: 'POST',
                body: JSON.stringify(formData),
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
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']})
        }
    })

    function clearForm() {
        // Get form element by ID
        const form = document.getElementById('myForm');

        if (form) {
            // Iterate through form elements and set their values to an empty string
            for (let i = 0; i < form.elements.length; i++) {
                const element = form.elements[i] as HTMLInputElement;

                // Check if the element is an input field
                if (element.tagName !== 'BUTTON') {
                    // Clear the input value
                    element.value = '';
                }
            }
        }
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // Get form elements using event.target.elements
        const formElements = event.currentTarget.elements;

        // Create an object to store input values
        const formData = {};

        // Iterate through form elements and store their values in the formData object
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i] as HTMLInputElement;

            // Check if the element is an input element
            if (element.tagName !== 'BUTTON') {
                formData[element.name] = element.value;
            }
        }

        mutation.mutate(formData)
        clearForm()
        toast({
            title: 'Post added successfully.',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
    }

    return (
        <div className="post-wrapper">
            <Nav/>

            <form id="myForm" onSubmit={onSubmit}>
                <VStack spacing={6}>
                    <VStack w="full" spacing={1} align="flex-start">
                        <label htmlFor="title">Title</label>
                        <Input name="title" id="title" type="text" required/>
                    </VStack>
                    <VStack w="full" spacing={1} align="flex-start">
                        <label htmlFor="excerpt">Excerpt</label>
                        <Input name="excerpt" id="excerpt" required/>
                    </VStack>
                    <VStack w="full" spacing={1} align="flex-start">
                        <label htmlFor="body">Body</label>
                        <Textarea name="body" id="body" required/>
                    </VStack>

                    <Button type="submit">Submit</Button>
                </VStack>
            </form>
        </div>
    )
}

export default CreatePost