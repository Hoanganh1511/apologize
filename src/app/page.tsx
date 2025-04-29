import Image from "next/image";

import { FaRegHandSpock } from "react-icons/fa";
export default function Home() {
  return (
    <div className=" px-[40px]">
      <div className="relative my-[20px] md:fixed  md:left-1/2 top-[20px] md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:min-w-[500px]  bg-white rounded-[24px] border-[1px] border-gray-200 shadow-md p-[30px]">
        <div className="absolute top-[30px] right-[-30px] md:right-[-30px] flex flex-col gap-y-[14px] font-mali">
          <FaRegHandSpock />
          <span className="text-[14px]">Q</span>
          <span className="text-[14px]">U</span>
          <span className="text-[14px]">Ỳ</span>
          <span className="text-[14px]">N</span>
          <span className="text-[14px]">H</span>
          <span className="text-[14px]">.</span>
        </div>
        <h1 className="font-dancing">
          <span className="text-[24px]"> I want to</span>
          <br />
          <span className="text-[40px] font-semibold"> Say Sorry</span>{" "}
          <Image
            src="/images/sorry.png"
            alt=""
            width={236}
            height={419}
            className="w-[80px] inline-block mb-[15px]"
          />
        </h1>

        {/* <p>Gửi cậu chiếc web nhỏ này</p> */}
        <p>
          Tớ nghĩ tớ thật tệ nếu không tìm ra cách giải quyết. Giống 1 ngày đẹp
          trời, tự nhiên có đứa làm mình khó chịu. Cũng một phần lần đầu tớ biết
          có người khó chịu với từ Ừ🚫 như thế. Lúc đầu thì tớ chỉ nghĩ đơn giản
          là ngữ cảnh lúc đấy làm cậu khó chịu vì từ Ừ🚫 lúc đấy mang cảm xúc
          như gượng ép. Nhưng giờ tớ thấy cậu thực sự ghét nó rồi. <br /> <br />
          Đây cũng là lời xin lỗi tớ muốn gửi tới cậu để cậu dịu lại hơn. <br />{" "}
          <br />
          À, tớ thấy xin lỗi chưa đủ, <br />
          ...
          <br />
          <br />
          Tớ muốn <span className="italic">hối lộ</span> chút đồ uống ấm nóng,
          cậu xem xét phê duyệt đề nghị này của tớ nhớ ? Nó cũng dịu bụng 1 phần
          đó. <br />
          <br />
          <p>Tớ hứa không làm việc cùng Ừ🚫 nữa.</p>
          <span className="font-bold">hịhị</span>
          <div className="mt-[20px] flex items-center justify-center gap-x-[30px]">
            <Image
              src="/images/drink-1.jpg"
              alt=""
              width={236}
              height={419}
              className="size-[80px] object-cover rounded-full"
            />
            <Image
              src="/images/drink-2.jpg"
              alt=""
              width={236}
              height={419}
              className="size-[80px] bg-left object-left object-cover rounded-full"
            />
            <Image
              src="/images/croissant.webp"
              alt=""
              width={236}
              height={419}
              className="size-[80px] object-cover rounded-full"
            />
          </div>
        </p>
      </div>
    </div>
  );
}
