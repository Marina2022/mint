import s from './Contracts.module.scss';
import {contracts} from "@/devData/contracts.js";
import ContractCard from "@/components/features/Contracts/ContractCard/ContractCard.jsx";

const Contracts = () => {
  return (
      <div className={s.contracts} id="contracts">        
        <div className={s.container}>
          <h2 className={s.title}>
            <span className={s.greenLetter}>C</span>ontracts  
          </h2>          
          <ul className={s.contractCards}>
            {
              contracts.map((contract)=><ContractCard contract={contract} key={contract.id} />)
            }
          </ul>
        </div>
      </div>
  );
};

export default Contracts;