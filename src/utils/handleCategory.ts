import { BigInt } from "@graphprotocol/graph-ts";
import { PoolFactory } from "../../generated/PoolFactory/PoolFactory";
import { Pool } from "../../generated/templates/Pool/Pool";
import { Category } from "../../generated/schema";

function handleCategory(
  factoryContract: PoolFactory,
  poolContract: Pool,
  operator?: string
): void {
  let categoryEntity = Category.load(poolContract.category().toString());

  if (!categoryEntity) {
    categoryEntity = new Category(poolContract.category().toString());

    const categoryData = factoryContract.categories(poolContract.category());

    categoryEntity.name = categoryData.value1;
    categoryEntity.status = categoryData.value2;
    categoryEntity.activePools = BigInt.fromI32(0);
  }

  if (operator === "plus") {
    categoryEntity.activePools = categoryEntity.activePools.plus(
      BigInt.fromI32(1)
    );
  }
  if (operator === "minus") {
    categoryEntity.activePools = categoryEntity.activePools.minus(
      BigInt.fromI32(1)
    );
  }

  categoryEntity.save();
}

export default handleCategory;
