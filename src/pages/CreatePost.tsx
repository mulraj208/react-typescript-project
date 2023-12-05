import {useMutation, useQueryClient} from "react-query";
import {Button, VStack, Input, Textarea, useToast} from "@chakra-ui/react";
import Nav from "../components/Nav";

const API_ENDPOINT = 'http://127.0.0.1:8000'

function CreatePost() {
    const toast = useToast()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (formData) => {
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
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    function clearForm() {
        // Get form element by ID
        const form = document.getElementById('myForm');

        // Iterate through form elements and set their values to an empty string
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i];

            // Check if the element is an input field
            if (element.tagName !== 'BUTTON') {
                // Clear the input value
                element.value = '';
            }
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()

        // Get form elements using event.target.elements
        const formElements = event.target.elements;

        // Create an object to store input values
        const formData = {};

        // Iterate through form elements and store their values in the formData object
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];

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
