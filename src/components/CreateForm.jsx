import { useState } from "react"

function CreateForm({addTodo}) {
    // 建立input內容的變數
    const [content, setContent] = useState('');
    // console.log(content);

    const handleSubmit=(e)=>{
        // 取消事件預設行為
        e.preventDefault();
        // 增加todo內容
        addTodo(content);
        // 清除input內容
        setContent('');
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="輸入待辦事項"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}

export default CreateForm