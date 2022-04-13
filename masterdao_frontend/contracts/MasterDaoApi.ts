import MasterDAOContractConstruct from "./construct/MasterDAO";
import {
  SubDAOData,
  DonateInfo
} from "../types/MasterDaoType";
import Web3 from "web3";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { errorFunction } from "./commonFunctions";

export const listSubDAO = async (): Promise<Array<SubDAOData>> => {
  console.log("## MasterDaoApi listSubDAO call 1");
  const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
  console.log("## masterDaoAddress:", masterDAOAddress);
  const contractConstract = MasterDAOContractConstruct;
  let response: SubDAOData[] = [];
  const provider = await detectEthereumProvider({ mustBeMetaMask: true });
  if (provider && window.ethereum?.isMetaMask) {
    if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        masterDAOAddress,
        contractConstract.abi,
        signer
      );
      await contract
        .getDaoList()
        .then((r: any) => {
          console.log(r)
          response = r;
        })
        .catch((err: any) => {
          console.log(err);
          errorFunction(err);
        });
    }
  } else {
    alert("Please instal metamask.");
  }
  return response;
};

// export const changeDaoReward = async (approveDaoData: ApproveDaoData, subDaoData: SubDAOData) => {
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   let response: ProposalInfo[] = [];
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     response = await contract
//       .changeDaoReward(subDaoData.daoAddress, approveDaoData.relatedProposalId,approveDaoData.doReward)
//       .catch((err: any) => {
//         console.log(err);
//         errorFunction(err);
//       });
//   }
//   return response;
// };

export const doDonateSelectedDao = async (donateInfo:DonateInfo,subDaoData: SubDAOData) => {
  const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
  const contractConstract = MasterDAOContractConstruct;
  if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      masterDAOAddress,
      contractConstract.abi,
      signer
    );
    console.log("## subDaoData.daoAddress:",subDaoData.daoAddress)
    console.log("## donateInfo.amount:", donateInfo.amount)
    console.log("## donateInfo.amount ETH:", Number(Web3.utils.toWei(String(donateInfo.amount))))
    await contract
      .divide(subDaoData.daoAddress, ethers.utils.parseEther(String(donateInfo.amount)),donateInfo.relatedProposalId)
      .catch((err: any) => {
        console.log(err);
        errorFunction(err);
      });
  }
};

export const doDonateMasterDao = async (donateInfo:DonateInfo) => {
  const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
  const contractConstract = MasterDAOContractConstruct;
  if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      masterDAOAddress,
      contractConstract.abi,
      signer
    );
    await contract
      .donate({value:ethers.utils.parseEther(String(donateInfo.amount))})
      .catch((err: any) => {
        console.log(err);
        errorFunction(err);
      });
  }
};

export const getBalance = async (): Promise<number> => {
  const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
  const contractConstract = MasterDAOContractConstruct;
  let response: number = 0;
  if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      masterDAOAddress,
      contractConstract.abi,
      signer
    );
    response = await contract.getContractBalance().catch((err: any) => {
      console.log(err);
      errorFunction(err);
    });
    console.log("### getProposalList Return: ", response);
  }
  return response;
};

// export const getMemberList = async (): Promise<Array<MemberInfo>> => {
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   let response: MemberInfo[] = [];
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     await contract
//       .getMemberList()
//       .then((r: any) => {
//         // console.log(r)
//         response = r;
//       })
//       .catch((err: any) => {
//         console.log(err);
//         alert(err.data.message);
//       });
//   }
//   return response;
// };

// export const addMember = async (_memberFormData: MemberFormData) => {
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   console.log("## add Member");
//   console.log("## add Member masterDAOAddress:", masterDAOAddress);
//   console.log("## add Member form data:", _memberFormData);
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     await contract
//       .addMember(
//         _memberFormData.name,
//         _memberFormData.memberAddress,
//         _memberFormData.proposalId
//       )
//       .catch((err: any) => {
//         console.log(err);
//         alert(err.data.message);
//       });
//   }
// };

// export const deleteMember = async (
//   _memberInfoData: MemberInfo,
//   _proposalId: number
// ) => {
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   console.log("## masterDAOAddress:", masterDAOAddress);
//   console.log("## memberinfo:", _memberInfoData);
//   console.log("## proposalId:", _proposalId);
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     await contract
//       .deleteMember(_memberInfoData.eoaAddress, _proposalId)
//       .catch((err: any) => {
//         console.log(err);
//         alert(err.data.message);
//       });
//   }
// };

// export const registerProposal = async (
//   inputData: AddProposalFormData
// ) => {
//   console.log("### registerProposal 1");
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     console.log("## Add Proposal: Detail: ", inputData.detail);
//     await contract
//       .submitProposal(
//         inputData.proposalKind,
//         inputData.title,
//         inputData.outline,
//         inputData.detail,
//         inputData.githubURL,
//         inputData.relatedId,
//         inputData.relatedAddress
//       )
//       .catch((err: any) => {
//         console.log(err);
//         alert(err.message);
//       });
//   }
// };

// export const getProposalListFromContract = async (): Promise<
//   Array<ProposalInfo>
// > => {
//   const masterDAOAddress = process.env.NEXT_PUBLIC_MASTERDAO_CONTRACT_ADDRESS;
//   const contractConstract = MasterDAOContractConstruct;
//   let response: ProposalInfo[] = [];
//   if (typeof window.ethereum !== "undefined" && masterDAOAddress) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(
//       masterDAOAddress,
//       contractConstract.abi,
//       signer
//     );
//     response = await contract.getProposalList().catch((err: any) => {
//       console.log(err);
//       alert(err.data.message);
//     });
//     console.log("### getProposalList Return: ", response);
//   }
//   return response;
// };




