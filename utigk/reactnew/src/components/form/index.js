import React ,{ useState } from 'react'
import axios from 'axios'

const FormPost = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`

    const [formData, setFormData] = useState({
        userId: '',
        title: '',
        body: ''
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value}) 
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url, formData).then(res =>{
            console.log(res)
        })
    }


    let { userId, title,  body } = formData;
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="userId" type="text" placeholder="userId" value={userId}
                    onChange={handleChange} />
                <input name="title" type="text" placeholder="title" value={title}
                    onChange={handleChange}/>
                <input name="body" type="text" placeholder="body" value={body}
                    onChange={handleChange}/>
                <button type="submit">On Submit</button>
            </form>
        </div>
    )
}

export default FormPost