import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

// 解構props的屬性名，用{屬性名}包起來
function Todo({ todo, deleteTodo, toggleCompleted, toggleEdit, editTodo }) {

    return (
        // 檢查todo.isEdit是否為修改狀態
        todo.isEdit
            // isEdit:true
            // 呼叫修改元件，並傳入
            ? <EditForm todo={todo} editTodo = {editTodo} />

            // isEdit:false
            // 顯示todo資料
            // 新增一個completed類別規則
            // 使用反引號+三元運算子檢查isCompleted
            // 如果為真 => 套用completed規則
            // 如果為否 => 取消completed規則 =>設定為空字串''
            : <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
                {/* <p>上課中</p> */}
                {/* <p>{todo}</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    <MdEdit
                        onClick={() => { toggleEdit(todo.id) }}
                        style={{ cursor: "pointer", fontSize: "1rem" }} />
                    <MdDelete
                        onClick={() => { deleteTodo(todo.id) }}
                        style={{ cursor: "pointer", marginLeft: "5px", fontSize: "1rem" }} />
                </div>
            </div>
    )
}

export default Todo