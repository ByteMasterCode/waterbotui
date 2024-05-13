const tg =window.Telegram.WebApp;
export function useTelegram(){
        const onClose=()=>{
            tg.onClose()
        }
        return{
            onClose,
            tg,
            user:tg?.initDataUnsafe?.user,
            queryId: tg.initDataUnsafe?.query_id
        }
}
