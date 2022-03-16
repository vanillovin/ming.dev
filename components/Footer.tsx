import metadata from 'data/metadata'

const Footer = () => {
  return (
    <div className="flex flex-col mt-24 p-2 border-t dark:border-gray-300">
      <div>
        {/* {metadata.social.github && (
          <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/github.svg" alt="github" />
          </a>
        )} */}
      </div>
      <div>Copyright © {new Date().getFullYear()} {metadata.author}</div>
    </div>
  )
}

export default Footer