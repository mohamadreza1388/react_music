// eslint-disable-next-line react/prop-types
export default function Container({ children }) {

    return (
        <div className={"container mx-auto"}>
            {
                children
            }
        </div>
    )
}