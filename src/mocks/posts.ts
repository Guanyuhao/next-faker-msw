import { http, HttpResponse } from "msw";

const allPosts = new Map<any, any>()

export const getPosts = http.get("/api/posts", ({}) => {
    return HttpResponse.json(Array.from(allPosts.values()))
})

export const addPosts = http.post("/api/posts", async ({ request }) => {
    const newPost = await request.json()
    // @ts-ignore
    allPosts.set(newPost?.id, newPost)
    return HttpResponse.json(newPost, { status: 201 })
})

export const delPosts = http.delete('/api/posts/:id', ({ params }) => {
 
    const { id } = params
 
    allPosts.clear();
 
    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(allPosts, { status: 200 })
  })

export default [
    getPosts,
    addPosts,
    delPosts,
]