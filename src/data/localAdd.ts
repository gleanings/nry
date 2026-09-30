import { SelectionParamObjectData } from '@vvi/command';
import { ld } from '../aided/local-data';
import { mustEndWithSlash } from '../aided/utils';

/**
 * # 将数据放入本地
 * @param item
 */
export function localAdd(item: SelectionParamObjectData<string>) {
  // 读写受限
  if (!ld.available) return false;

  const value = mustEndWithSlash(item.value);

  return ld.addNew({
    value,
    label: item.label.toString(),
    tip: value,
    disable: false,
  });
}
