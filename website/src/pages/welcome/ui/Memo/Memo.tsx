import FontChangingText from "@widgets/FontChangingText/FontChangingText.tsx";

const Memo = () => {
    return (
        <>
            <h1>“Make it</h1>
            <FontChangingText text='run' />
            <h1>make it,&nbsp;</h1>
            <FontChangingText text='right' />
            <h1>”</h1>
        </>
    )
}

export default Memo;