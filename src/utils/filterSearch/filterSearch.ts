import filterSearchProps from './filterSearch.type';

const filterSearch = ({ inputValue = '', datas }: filterSearchProps) => {
  //데이터 배열에 순서 번호 추가 (id)
  const plusDataNumber = datas.map((item, index) => {
    return { id: index, key: item[0], item: item[1] };
  });

  //item기준으로 key값 필터링
  const filter = plusDataNumber.filter(data => {
    return data.item.indexOf(inputValue) !== -1;
  });

  //필터링된 값을 다시 id, key 형태로 변환 후 반환
  const result: filterSearchProps['result'] = filter.map(item => {
    return { id: item.id, key: item.key };
  });

  return result;
};

export default filterSearch;
