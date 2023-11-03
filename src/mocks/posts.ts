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

export const delPosts = http.delete('/posts/:id', ({ params }) => {
    // All request path params are provided in the "params"
    // argument of the response resolver.
    const { id } = params
 
    // Let's attempt to grab the post by its ID.
    const deletedPost = allPosts.get(id)
 
    // Respond with a "404 Not Found" response if the given
    // post ID does not exist.
    if (!deletedPost) {
      return new HttpResponse(null, { status: 404 })
    }
 
    // Delete the post from the "allPosts" map.
    allPosts.delete(id)
 
    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(deletedPost)
  })

export default [
    getPosts,
    addPosts,
    delPosts,
]