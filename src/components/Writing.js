import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FileBase from 'react-file-base64';

import '../css/writing.css';



const Writing = () => {
  const [postData, setPostData] = useState({ title: '', category: '', info: '', selectedFile: '', startPrice: '', endPrice: '', unit: '' });

  const [category, setCategory] = React.useState('');
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  console.log(category);

  const post = null;

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({ title: '', category: '', info: '', selectedFile: '', startPrice: '', endPrice: '', unit: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className='writing'>
        <div className='writing_head'>
          <h1>경매 글쓰기</h1>
        </div>
        <div className='writing_upper'>

          <div className='fileBase'>
            <div className='fileBase_img'>
              <CameraAltOutlinedIcon fontSize="large"/>
            </div>
            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>

          <div className='writing_upper_input'>
            <div className='title'>
              <TextField name="title" variant="outlined" label="제목을 입력하세요." fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
            </div>

            <div className='category'>
              <div className='selectCategory'>
                <Box sx={{ maxWidth: 250 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">카테고리 선택</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleChange}
                      >
                      <MenuItem value={'digital'}>디지털기기</MenuItem>
                      <MenuItem value={'furniture'}>가구/인테리어</MenuItem>
                      <MenuItem value={'clothes'}>의류</MenuItem>
                      <MenuItem value={'homeAppliances'}>생활가전</MenuItem>
                      <MenuItem value={'living'}>생활/주방</MenuItem>
                      <MenuItem value={'sports'}>스포츠/레저</MenuItem>
                      <MenuItem value={'hobbyGame'}>취미/게임</MenuItem>
                      <MenuItem value={'books'}>도서</MenuItem>
                      <MenuItem value={'cars'}>차량</MenuItem>
                      <MenuItem value={'others'}>기타</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>

            <div className='price'>
              <div className='startPrice'>
                <TextField name="startPrice" variant="outlined" label="시작가격" fullWidth value={postData.startPrice} onChange={(e) => setPostData({ ...postData, startPrice: e.target.value })} />
              </div>
              <div className='endPrice'>
                <TextField name="endPrice" variant="outlined" label="즉시구매가격" fullWidth value={postData.endPrice} onChange={(e) => setPostData({ ...postData, endPrice: e.target.value })} />
              </div>
              <div className='priceUnit'>
                <TextField name="priceUnit" variant="outlined" label="입찰단위설정" fullWidth value={postData.unit} onChange={(e) => setPostData({ ...postData, unit: e.target.value })} />
              </div>
            </div>
          </div>
      </div>

      <div className='writing_lower'>
        <form autoComplete="off" noValidate className='' onSubmit={handleSubmit}>
          <TextField name="info" variant="outlined" label="상품에 대한 설명을 작성해주세요.
            입찰자 발생시 상품글을 수정 및 삭제할 수 없으니 신중하게 작성하시기 바랍니다." fullWidth multiline minRows={12} value={postData.info} 
          onChange={(e) => {
            console.log(e.target.value);
            setPostData({ ...postData, info: e.target.value })}} />
          
        </form>
      </div>
      <div className='buttons'>
        <button className='buttonSubmit' type="submit">완료</button>
        <button className='buttonClear' onClick={clear}>초기화</button>
      </div>
    </div>
  );
};

export default Writing;
