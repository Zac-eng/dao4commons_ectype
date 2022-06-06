import Link from "next/link";
import { useEffect, useState } from "react";
import DaoBalance from "dao4.frontend.common/components/DaoBalance";
import { useRouter } from "next/router";
import { getDaoName } from "dao4.frontend.common/contracts/subdao_api";
import Member from "@/dao4.frontend.common/components/Member";
import Proposal from "@/dao4.frontend.common/components/Proposal";
import Donate from "@/dao4.frontend.common/components/Donate";
import { TargetDaoKind } from "@/dao4.frontend.common/types/MasterDaoType";

const DaoTop = () => {
  const router = useRouter();
  const subDAOaddress = String(router.query.address)
  const [daoName,setDaoName] = useState("");
  const [showMember,setShowMember] = useState(false);
  const [showProposal,setShowProposal] = useState(false);
  const [showDonate,setShowDonate] = useState(false);

  useEffect(()=>{
    _getDaoName();
  },[])

  const _getDaoName = async () => {
    setDaoName(await getDaoName(subDAOaddress));
  }

  const _setShow = (showMember:boolean,showProposal:boolean,showDonate:boolean) =>{
    setShowMember(showMember);
    setShowProposal(showProposal);
    setShowDonate(showDonate);
  }

  return (
    <>
      <div className="bg-black flex flex-col min-h-screen">
        <div className="m-5 text-25px text-left text-white underline leading-none tracking-tight">
          <Link href="/">Back to Top</Link>
        </div>
        <div className="text-center text-100px font-extrabold leading-none tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-100">
            {daoName}
          </span>
        </div>
        <div className="p-4 text-center">
          <DaoBalance daoAddress={subDAOaddress} isMasterDao={false}></DaoBalance>
        </div>
        <div className="p-1 text-center text-25px">
          <button 
            className="m-5 px-7 py-3 border-double border-white border-2 bg-black rounded text-white  hover:border-orange-500"
            onClick={()=>_setShow(!showMember,false,false)}
          >
            Members
          </button>
          <button 
            className="m-5 px-7 py-3 border-double border-white border-2 bg-black rounded text-white  hover:border-orange-500"
            onClick={()=>_setShow(false,!showProposal,false)}
          >
            Proposals
          </button>
          <button 
            className="m-5 px-7 py-3 border-double border-white border-2 bg-black rounded text-white  hover:border-orange-500"
            onClick={()=>_setShow(false,false,!showDonate)}
          >
            Donate
          </button>
          <Link href={`/dao/${subDAOaddress}/tokens`}>
          <button
            className="m-5 px-7 py-3 border-double border-white border-2 bg-black rounded text-white  hover:border-orange-500"
          >
            Tokens
          </button>
          </Link>
        </div>
        {showMember == true &&(
          <Member daoAddress={subDAOaddress}></Member>
        )}
        {showProposal == true &&(
          <Proposal daoAddress={subDAOaddress}></Proposal>
        )}
        {showDonate == true && (
          <Donate daoAddress={subDAOaddress} daoName={daoName} targetDaoKind={TargetDaoKind.TARGET_DAO_FROM_INDIVIDIALS}></Donate>
        )}
      </div>
    </>
  );
};

export default DaoTop;

