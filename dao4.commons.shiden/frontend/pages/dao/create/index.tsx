import { SubDAODeployFormData } from "../../../dao4.frontend.common/types/SubDaoType"
import { RegisterSteps } from "../../../dao4.frontend_ectype/types/StepsManager"
import AddFirstMember from "@/components/AddFirstMember";
import DeployDAO from "@/components/DeployDAO";
import DeployNFT from "@/components/DeployNFT";
import MintNFT from "@/components/MintNFT";
import RegisterToMasterDao from "@/components/RegisterToMasterDao";
import Link from "next/link";
import { useState } from "react";
import { DfCHeader } from "../../../components/DfCHeader";
import { DfCFooter } from "../../../components/DfCFooter";

import { AppShell, Navbar, Group} from '@mantine/core';


const CreateDAO = () => {
  const [showDeployNft, setShowDeployNft] = useState(true);
  const [showMintNft, setShowMintNft] = useState(false);
  const [showDeployDao, setShowDeployDao] = useState(false);
  const [showRegisterDao, setShowRegisterDao] = useState(false);
  const [showAddFirstMember, setShowAddFirstMember] = useState(false);

  const [checkDeployNft, setCheckDeployNft] = useState(false);
  const [checkMintNft, setCheckMintNft] = useState(false);
  const [checkDeployDao, setCheckDeployDao] = useState(false);
  const [checkRegisterDAO, setCheckRegisterDAO] = useState(false);
  const [checkAddFirstMember, setCheckAddFirstMember] = useState(false);
  
  const [nftAddress, setNftAddress] = useState("");
  const [daoAddress, setDaoAddress] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [daoValue, setDaoValue] = useState<SubDAODeployFormData>({
    name: "",
    githubUrl: "",
    memberNFTAddress: "",
    ownerName: "",
    description: "",
  });


  // return (
  //   <>
  //   <ShowStepbar/>
  //   <DfCHeader/>
  //     <div className="bg-black flex flex-col min-h-screen">
  //       <div className="m-5 text-25px text-left text-white underline leading-none tracking-tight">
  //         <Link href="/">Back to Top</Link>
  //       </div>
  //       <div className="text-50px text-center text-orange-200 leading-none tracking-tight">
  //         <p className="">You need the following steps to create a DAO. </p>
  //         <div className="p-3"></div>
  //         <p className="">Click each step.</p>
  //       </div>
  //       <div className="m-3"></div>
  //       <div className="flex flex-col justify-center m-5 leading-none tracking-tight">
  //         <table>
  //           <tr className="text-30px">
  //             <td className="text-center">
  //               <button
  //                 className="m-2 text-white hover:text-orange-200"
  //                 onClick={() => setShowDeployNft(true)}
  //               >
  //                 &nbsp; &nbsp; 1.&nbsp; Deploy NFT as your DAO membership card.
  //               </button>
  //             </td>
  //             {checkDeployNft == true && (
  //               <td>
  //                 <p className="px-5 text-blue-500">Finished</p>
  //               </td>
  //             )}
  //             {checkDeployNft == false && (
  //               <td>
  //                 <p className="px-5 text-red-500">Yet</p>
  //               </td>
  //             )}
  //           </tr>
  //           <div>
  //             {showDeployNft == true && (
  //               <>
  //                 <div className="m-3"></div>
  //                 <DeployNFT
  //                   setCheckDeployNft={setCheckDeployNft}
  //                   setNftAddress={setNftAddress}
  //                 ></DeployNFT>
  //               </>
  //             )}
  //           </div>
  //           <tr className="text-30px">
  //             <td className="text-center">
  //               <button
  //                 className="m-2 text-white hover:text-orange-300"
  //                 onClick={() => setShowMintNft(true)}
  //               >
  //                 &nbsp; &nbsp; 2.&nbsp; Mint your own NFT.
  //               </button>
  //             </td>
  //             {checkMintNft == true && (
  //               <td>
  //                 <p className="px-5 text-blue-500">Finished</p>
  //               </td>
  //             )}
  //             {checkMintNft == false && (
  //               <td>
  //                 <p className="px-5 text-red-500">Yet</p>
  //               </td>
  //             )}
  //           </tr>
  //           <div>
  //             {(checkDeployNft == true && showMintNft == true) && (
  //               <MintNFT
  //                 setCheckMintNft={setCheckMintNft}
  //                 nftAddress={nftAddress}
  //                 setTokenId={setTokenId}
  //                 setTokenAddress={setTokenAddress}
  //               ></MintNFT>
  //             )}
  //           </div>
  //           <tr className="text-30px">
  //             <td className="text-center">
  //               <button
  //                 className="m-2 text-white hover:text-orange-400"
  //                 onClick={() => setShowDeployDao(true)}
  //               >
  //                 &nbsp; &nbsp; 3.&nbsp; Deploy your DAO.
  //               </button>
  //             </td>
  //             {checkDeployDao == true && (
  //               <td>
  //                 <p className="px-5 text-blue-500">Finished</p>
  //               </td>
  //             )}
  //             {checkDeployDao == false && (
  //               <td>
  //                 <p className="px-5 text-red-500">Yet</p>
  //               </td>
  //             )}
  //           </tr>
  //           <div>
  //             {(checkMintNft == true && showDeployDao == true) && (
  //               <DeployDAO
  //                 setCheckDeployDao={setCheckDeployDao}
  //                 memberNFTAddress={nftAddress}
  //                 setDaoAddress={setDaoAddress}
  //                 setDaoValue={setDaoValue}
  //               ></DeployDAO>
  //             )}
  //           </div>
  //           <tr className="text-30px">
  //             <td className="text-center">
  //               <button
  //                 className="m-2 text-white hover:text-orange-500"
  //                 onClick={() => setShowRegisterDao(true)}
  //               >
  //                 &nbsp; &nbsp; 4.&nbsp; Register your DAO with MasterDAO.
  //               </button>
  //             </td>
  //             {checkRegisterDAO == true && (
  //               <td>
  //                 <p className="px-5 text-blue-500">Finished</p>
  //               </td>
  //             )}
  //             {checkRegisterDAO == false && (
  //               <td>
  //                 <p className="px-5 text-red-500">Yet</p>
  //               </td>
  //             )}
  //           </tr>
  //           <div>
  //             {(checkDeployDao == true && showRegisterDao == true) && (
  //               <RegisterToMasterDao
  //                 setCheckRegisterDAO={setCheckRegisterDAO}
  //                 dataToBeRegisterd={daoValue}
  //                 subDaoAddress={daoAddress}
  //               ></RegisterToMasterDao>
  //             )}
  //           </div>
  //           <tr className="text-30px">
  //             <td className="text-center">
  //               <button
  //                 className="m-2 text-white hover:text-orange-500"
  //                 onClick={() => setShowAddFirstMember(true)}
  //               >
  //                 &nbsp; &nbsp; 5.&nbsp; Register you to the DAO as the owner.
  //               </button>
  //             </td>
  //             {checkAddFirstMember == true && (
  //               <td>
  //                 <p className="px-5 text-blue-500">Finished</p>
  //               </td>
  //             )}
  //             {checkAddFirstMember == false && (
  //               <td>
  //                 <p className="px-5 text-red-500">Yet</p>
  //               </td>
  //             )}
  //           </tr>
  //           <div>
  //             {(checkRegisterDAO == true && showAddFirstMember == true) && (
  //               <AddFirstMember
  //               setCheckAddFirstMember={setCheckAddFirstMember}
  //               subDaoAddress={daoAddress}
  //               tokenId={tokenId}
  //               ></AddFirstMember>
  //             )}
  //           </div>
  //             {checkAddFirstMember!==false
  //               }
  //         </table>
  //       </div>
  //     </div>
  //     <DfCFooter/>
  //   </>
  // );
  return (
    <>
        <AppShell className="bg-black font-sans max-h-[85vh]"
        navbar={<Navbar className="bg-black max-h-[70vh]" width={{ sm: 500 }} p="md">
          {<>
      <Navbar.Section className="flex flex-col">
        <td className="text-orange-300 font-sans text-40px">
        Follow Steps Below
        </td>
        <td className="text-orange-300 font-sans text-40px">
        TO Create Your DAO
        </td>
      </Navbar.Section>
      <Navbar.Section>
        <tr className="text-30px">
              {checkDeployNft == false && (
                <td className="text-center">
                  <p className="text-orange-200">&nbsp; &nbsp; 1.&nbsp; Deploy NFT as your DAO membership card.</p>
                </td>
              )}
              {checkDeployNft == true && (
                <td>
                  <p className="text-white">&nbsp; &nbsp; 1.&nbsp; Deploy NFT as your DAO membership card.</p>
                </td>
              )}
              {checkDeployNft == true && (
                <td>
                  <p className="px-5 text-blue-500">Finished</p>
                </td>
              )}
              {checkDeployNft == false && (
                <td>
                  <p className="px-5 text-red-500">Yet</p>
                </td>
              )}
          </tr>
      </Navbar.Section>
      <Navbar.Section>
      <tr className="text-30px">
              {showMintNft == true && checkMintNft == false && (
                <td className="text-center">
                  <p className="text-orange-300">&nbsp; &nbsp; 2.&nbsp; Mint your own NFT.</p>
                </td>
              )}
              {((showMintNft == false && checkMintNft == false ) || checkMintNft == true) && (
                <td>
                  <p className="text-white">&nbsp; &nbsp; 2.&nbsp; Mint your own NFT.</p>
                </td>
              )}
              {checkMintNft == true && (
                <td>
                  <p className="px-5 text-blue-500">Finished</p>
                </td>
              )}
              {checkMintNft == false && (
                <td>
                  <p className="px-5 text-red-500">Yet</p>
                </td>
              )}
            </tr>
      </Navbar.Section>
      <Navbar.Section>
      <tr className="text-30px">
              {showDeployDao == true && checkDeployDao == false && (
                <td className="text-center">
                  <p className="text-orange-400">&nbsp; &nbsp; 3.&nbsp; Deploy your DAO.</p>
                </td>
              )}
              {((showDeployDao == false && checkDeployDao == false ) || checkDeployDao == true) && (
                <td>
                  <p className="text-white">&nbsp; &nbsp; 3.&nbsp; Deploy your DAO.</p>
                </td>
              )}
              {checkDeployDao == true && (
                <td>
                  <p className="px-5 text-blue-500">Finished</p>
                </td>
              )}
              {checkDeployDao == false && (
                <td>
                  <p className="px-5 text-red-500">Yet</p>
                </td>
              )}
            </tr>
      </Navbar.Section>
      <Navbar.Section>
      <tr className="text-30px">
              {showRegisterDao == true && checkRegisterDAO == false && (
                <td className="text-center">
                  <p className="text-orange-500">4.&nbsp; Register your DAO with MasterDAO.</p>
                </td>
              )}
              {((showRegisterDao == false && checkRegisterDAO == false ) || checkRegisterDAO == true) && (
                <td>
                  <p className="text-white">4.&nbsp; Register your DAO with MasterDAO.</p>
                </td>
              )}
              {checkRegisterDAO == true && (
                <td>
                  <p className="px-5 text-blue-500">Finished</p>
                </td>
              )}
              {checkRegisterDAO == false && (
                <td>
                  <p className="px-5 text-red-500">Yet</p>
                </td>
              )}
            </tr>
      </Navbar.Section>
      <Navbar.Section>
      <tr className="text-30px">
              {showAddFirstMember == true && checkAddFirstMember == false && (
                <td className="text-center">
                  <p className="text-orange-500">&nbsp; &nbsp; 5.&nbsp; Register you to the DAO as the owner.</p>
                </td>
              )}
              {((showAddFirstMember == false && checkAddFirstMember == false ) || checkAddFirstMember == true) && (
                <td>
                  <p className="text-white">&nbsp; &nbsp; 5.&nbsp; Register you to the DAO as the owner.</p>
                </td>
              )}
              {checkAddFirstMember == true && (
                <td>
                  <p className="px-5 text-blue-500">Finished</p>
                </td>
              )}
              {checkAddFirstMember == false && (
                <td>
                  <p className="px-5 text-red-500">Yet</p>
                </td>
              )}
            </tr>
      </Navbar.Section>
      <Group className="text-white font-sans text-30px" position="apart" >
        <button className="m-5 px-6 px-3 border-double border-white border-2 bg-black rounded text-white  hover:border-orange-500">
          <Link href="/">Back to Top</Link>
        </button>  
        </Group>
          </>}
        </Navbar>}
         header={<DfCHeader/>} footer={<DfCFooter/>}>

         <table className="w">
            <div>
              {(showDeployNft == true || (showDeployNft == false && checkDeployNft == false)) && (
                <>
                  <div className="m-3"></div>
                  <DeployNFT
                    setCheckDeployNft={setCheckDeployNft}
                    setNftAddress={setNftAddress}
                    setShowDeployNft={setShowDeployNft}
                    setShowMintNft={setShowMintNft}
                  ></DeployNFT>
                </>
              )}
            </div>
            
            <div>
              {(checkDeployNft == true && showMintNft == true && checkMintNft == false) && (
                <MintNFT
                  setCheckMintNft={setCheckMintNft}
                  nftAddress={nftAddress}
                  setTokenId={setTokenId}
                  setTokenAddress={setTokenAddress}
                  setShowDeployDao={setShowDeployDao}
                ></MintNFT>
              )}
            </div>
            
            <div>
              {(checkMintNft == true && showDeployDao == true && checkDeployDao == false) && (
                <DeployDAO
                  setCheckDeployDao={setCheckDeployDao}
                  memberNFTAddress={nftAddress}
                  setDaoAddress={setDaoAddress}
                  setDaoValue={setDaoValue}
                  setShowRegisterDao={setShowRegisterDao}
                ></DeployDAO>
              )}
            </div>
            
            <div>
              {(checkDeployDao == true && showRegisterDao == true && checkRegisterDAO == false) && (
                <RegisterToMasterDao
                  setCheckRegisterDAO={setCheckRegisterDAO}
                  dataToBeRegisterd={daoValue}
                  subDaoAddress={daoAddress}
                  setShowAddFirstMember={setShowAddFirstMember}
                ></RegisterToMasterDao>
              )}
            </div>
            
            <div>
              {(checkRegisterDAO == true && showAddFirstMember == true && checkAddFirstMember == false) && (
                <AddFirstMember
                setCheckAddFirstMember={setCheckAddFirstMember}
                subDaoAddress={daoAddress}
                tokenId={tokenId}
                ></AddFirstMember>
              )}
            </div>
            <div>
              {checkAddFirstMember == true && (
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-500 flex flex-col" style={{"fontFamily":"Gill sans"}}>
                <td className="text-100px">
                congratulations!
               </td>
               <td className="text-50px">
                You've successfully created DAO!
                </td>
                <td className="text-50px">
                Please press "Back to Top" to see Your DAO!
                </td>
                </div>
              )}
            </div>
              {checkAddFirstMember!==false
                }
          </table>
        </AppShell>
    </>
  )
};

export default CreateDAO;

