import react from 'react'
import './category.css'

export const NewPost = () => {
    return (
        <>
            <form>
             <input type="text" placeholder="Your post" className='form' formMethod='post'></input>
             <input type="submit" className='submit'></input>
            </form>
        </>
    )
}
