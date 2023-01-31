function App() {
    const [text, setText] = React.useState(`# H1
## H2
### H3

- First item
- Second item
- Third item

**bold text**

> blockquote

[title](https://www.example.com)

~~The world is flat.~~
    `);

    return (
        <div class='container mx-auto row align-items-center vh-100 vw-100 '>
            <div class='col'>
                <div class='fs-2 fw-bold'>Editor</div>
                <textarea id='editor' class='row-10 rounded border border-primary text-white bg-black resize-none' 
                          placeholder='Enter Code' onChange={(e) => setText(e.target.value)} value={text}></textarea>
            </div>
            <div class='col'>
                <div class='fs-2 fw-bold'>Previewer</div>
                <div class='pre rounded border border-primary text-white bg-black'
                     dangerouslySetInnerHTML={{
                    __html: marked.parse(text),
                    }} >
                </div>
            </div>
        </div>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'))