import { ethers } from "hardhat";

async function main() {
  const rs = await ethers.deployContract("FeedbackAndRating");

  await rs.waitForDeployment();

  console.log(
    `Deployed to ${rs.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
