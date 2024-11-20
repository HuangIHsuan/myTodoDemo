import { useState } from "react"

function EditForm({todo, editTodo}) {
    // 建立input內容的變數
    // 預設值為修改中的todo內容
    const [content, setContent] = useState(todo.content);
    // console.log(content);

    const handleSubmit = (e) => {
        // 取消事件預設行為
        e.preventDefault();
        editTodo(todo.id, content);
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm