import { clients } from "../constants"
import styles from "../style"

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}>
            <img src={client.logo} alt="client"
              className="hover:brightness-200 w-[100px] sm:w-[192px] object-contain hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients