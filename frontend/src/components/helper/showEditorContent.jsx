const EditorDisplay = ({ content }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
};
export default EditorDisplay;