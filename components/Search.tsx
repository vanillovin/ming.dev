import { useState } from 'react';
import Post from './Post';
import SearchForm from './SearchForm';

const Search = ({ type, posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const results = searchValue ? filteredPosts : posts;

  return (
    <>
      <SearchForm onChange={(e) => setSearchValue(e.target.value)} /> 
      <div className={`flex flex-col`}>
        {results.map((post) => (
          <Post
            type={type}
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post.slug}
            key={post._id}
          />
        ))}
      </div>
      {!filteredPosts.length && (
        <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          No posts found.
        </p>
      )}
    </>
  )
}

export default Search