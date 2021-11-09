import reactDom from "react-dom"
export default function Modal({children}){
    return reactDom.createPortal(children, document.body);
}