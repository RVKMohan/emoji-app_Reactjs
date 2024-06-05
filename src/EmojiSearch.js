// src/EmojiSearch.js
import React, { useState } from 'react';
import emojiList from './emojis'
// Sample list of emojis

function EmojiSearch() {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const filteredEmojis = emojiList.filter(emoji =>
        emoji.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='block'>
        <div className="emoji-search">
        <b>Emoji's</b>
        <br></br>
            <input
                type="text"
                placeholder="Search for an emoji..."
                value={query}
                onChange={handleSearch}
            />
            <div className="emoji-list">
                {filteredEmojis.map((emoji, index) => (
                    <div key={index} className="emoji-item">
                        <span>{emoji.symbol}</span> 
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default EmojiSearch;
