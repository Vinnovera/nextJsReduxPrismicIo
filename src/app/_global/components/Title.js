// import React from 'react';
import { RichText } from 'prismic-reactjs';

function TitleComponent ({ text }) {
  return RichText.render(text)
}

export default TitleComponent;