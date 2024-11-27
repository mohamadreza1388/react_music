// eslint-disable-next-line react/prop-types
export default function Group({children, title = null}) {

    return (
        <div className={"w-full my-6"}>
            <span className={'text-[#6E61EB] text-[14px] font-semibold'}>{ title }</span>
            {
                children
            }
        </div>
    )
}