import Message from "./Message";
import { useAppDispatch } from "../../app/hooks";
import { setMessageId } from "../../appSlices/dasboardSlice";

const MessageBox = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full px-[30px] mt-[51px] mb-[62px]">
      <div className="min-h-[715px] w-full bg-textWhite rounded-[16px] shadow-[0px_1px_8px_0px_rgba(0,0,0,0.08)] py-[21px] px-[43px]">
        <div className="flex items-center justify-between h-[73px] p-[21px_11px_22px] border-b-[0.2px] border-b-[#F6F7F8] mb-[20px]">
          <span className="text-[24px] text-textBlackH font-[600]">
            Message Box
          </span>
          <div className="flex items-center gap-x-[11px]">
            <span className="text-[24px] text-textBlackH font-[600]">Sort</span>
            <img src="/images/sort.png" alt="" />
          </div>
        </div>
        {/* New messages */}
        <div className="w-full">
          <p className="text-[20px] text-textBlack font-[400]">New Messages</p>
          <Message
            id={1}
            title="Did You Know?"
            preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
            color="blue"
            readMore={() => dispatch(setMessageId(1))}
          />
          <Message
            id={2}
            title="Warning"
            preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
            color="red"
            readMore={() => dispatch(setMessageId(2))}
          />
        </div>

        {/* Old Messages */}

        <div className="w-full mt-[53px]">
          <p className="text-[20px] text-textBlack font-[400]">Old Messages</p>
          <Message
            id={3}
            title="Congratulations"
            preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
            color="green"
            readMore={() => dispatch(setMessageId(3))}
          />
          <Message
            id={4}
            title="Did You Know?"
            preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
            color="blue"
            readMore={() => dispatch(setMessageId(4))}
          />
          <Message
            id={5}
            title="Warning"
            preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit....."
            color="red"
            readMore={() => dispatch(setMessageId(5))}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
