// eslint-disable-next-line react/prop-types
export default function Home({ children, className }) {

    return (
        <div className={"flex gap-9 pt-12" + " " + className }>
            {
                children
            }
        </div>
    )
}