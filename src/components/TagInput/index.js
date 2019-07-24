import React, { useState, useEffect } from "react";
import { TagInputContainer, Label, TagsList, TagInputWrapper } from "./styles";

const KEYBOARD_EVENTS = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACE: 32
};

const TagInput = props => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const { value, onChange } = props;
  useEffect(() => {
    let tags = [];
    items.map(item => tags.push(item.value));
    onChange(tags);
  }, [items]);

  useEffect(() => {
    if (value.length === 0 && items.length !== 0) setItems([]);
  }, [value]);

  const addNewTag = value => {
    setItems([...items, { id: Date.now(), value: value.trim() }]);
    setInput("");
  };

  const removeTag = tag => {
    let filteredItems = items.filter(item => item.id !== tag.id);
    setItems(filteredItems);
  };

  const handleInputChange = event => {
    setInput(event.target.value);
  };

  const handleBlur = event => {
    const { value } = event.target;
    if (value.trim() !== "") addNewTag(value);
  };

  const handleInputKeyDown = event => {
    const { value } = event.target;
    switch (event.keyCode) {
      case KEYBOARD_EVENTS.SPACE:
      case KEYBOARD_EVENTS.ENTER:
        if (value.trim() !== "") addNewTag(value);
        break;
      case KEYBOARD_EVENTS.BACKSPACE:
        if (input === "") {
          items.pop();
          setItems([...items]);
        }
        break;
      default:
        return false;
    }
  };

  return (
    <TagInputContainer>
      <span>{props.title}</span>
      <Label>
        <TagInputWrapper>
          <TagsList>
            {items.map((item, index) => (
              <li key={index}>
                <div>
                  <div className={"tag-wrapper"}>
                    <span>#{item.value}</span>
                  </div>

                  <div className={"close-icon"}>
                    <i
                      className="fas fa-times"
                      onClick={() => {
                        removeTag(item);
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
            <input
              autoComplete={"off"}
              type={"text"}
              name={"tagInput"}
              value={input}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleInputKeyDown}
            />
          </TagsList>
        </TagInputWrapper>
      </Label>
    </TagInputContainer>
  );
};

export default TagInput;
