import React from 'react';
const SearchBox = () => {
    return (
        <div className="search hidden-xs" data-style="hidden">
            <div className="input">
                <button type="button"><i className="ion-ios-search"></i></button>

                <input type="text" name="search" placeholder="Type here..." />
            </div>
        </div>
    );
}

export default SearchBox;