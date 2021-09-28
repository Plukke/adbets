import { PoolFactory } from "../../generated/PoolFactory/PoolFactory";
import { Pool } from "../../generated/templates/Pool/Pool";
import { Group } from "../../generated/schema";

function handleGroup(factoryContract: PoolFactory, poolContract: Pool): void {
  let groupEntity = Group.load(poolContract.group().toString());

  if (!groupEntity) {
    groupEntity = new Group(poolContract.group().toString());

    const categoryData = factoryContract.groups(poolContract.group());

    groupEntity.category = categoryData.value1.toString();
    groupEntity.name = categoryData.value2;
    groupEntity.country = categoryData.value3;
    groupEntity.status = categoryData.value4;
  }

  groupEntity.save();
}

export default handleGroup;
