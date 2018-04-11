// import React from 'react';
import { RichText } from 'prismic-reactjs';

function RichTextComponent ({ text }) {
  return RichText.render(text)
}

export default RichTextComponent;