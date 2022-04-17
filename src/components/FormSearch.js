//import React from 'react';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Input } from '@chakra-ui/react';

const FormSearch = ({ handleSubmit }) => {
  const inputTag = useRef();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <Input
            type='text'
            name='text'
            ref={inputTag}
            placeholder='Search en IMDflix'
            bg={'#ffffff'}
            border={0}
            color={'gray.900'}
            w={'full'}
            m={1}
            h={'30'}
            _placeholder={{
              color: 'gray.500',
            }}
          />
        </label>
      </form>
    </>
  );
};

FormSearch.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormSearch;
