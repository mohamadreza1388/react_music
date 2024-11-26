// eslint-disable-next-line react/prop-types
export default function SideBar({ children }) {

    return (
        <aside className={"basis-3/12 rounded-[16px] bg-[#F8F8F8] p-8"}>
            {
                children
            }
        </aside>
    )
}