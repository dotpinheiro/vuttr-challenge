import React, { useState, useEffect } from "react";
import { TagInputContainer, Label, TagsList, TagInputWrapper } from "./styles";

const TagInput = props => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  useEffect(() => {
    props.onTagAdded(items);
  }, [items]);

  const handleInputKeyDown = event => {
    const { value } = event.target;
    if (event.keyCode === 32) {
      setItems([...items, value]);
      setInput("");
    }
  };

  const removeTag = tag => {
    let filteredItems = items.filter(item => item !== tag);
    setItems(filteredItems);
  };

  return (
    <TagInputContainer>
      <Label htmlFor={"tagInput"}>
        <span>{props.title}</span>
        <TagInputWrapper>
          <TagsList>
            {items.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    removeTag(item);
                  }}
                >
                  x
                </button>
                <pre>#{item} </pre>
              </li>
            ))}
          </TagsList>
          <input
            type={"text"}
            name={"tagInput"}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </TagInputWrapper>
      </Label>
    </TagInputContainer>
  );
};

export default TagInput;
