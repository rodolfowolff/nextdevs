import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { MarkdownStyle } from './styles'
import remarkGfm from 'remark-gfm'

export default function Markdown({ ...props }) {
  const markdown = `${props.postContent}`
  return (
    <MarkdownStyle>
      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      />
    </MarkdownStyle>
  )
}
