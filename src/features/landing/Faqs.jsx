"use client";
import { useState } from "react";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { PHONE_DISPLAY } from "../../shared/constants/brand";

const Faq = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const items = [
    {
      key: "1",
      label: "How do I book a ride with Solo Taxis?",
      children: (
        <p className="faq-answer">
          You can easily book a ride in Sheffield with the Solo Taxis app, online at our booking page, or call us on{" "}
          <span className="text-(--accent) font-medium">{PHONE_DISPLAY}</span>.
        </p>
      ),
    },
    {
      key: "2",
      label: "What is the best Uber alternative in Sheffield?",
      children: (
        <p className="faq-answer">
          Solo Taxis is a fantastic alternative to Uber in Sheffield. The Solo Taxis app is
          easy-to-use, and delivers quick response times at competitive prices.
        </p>
      ),
    },
    {
      key: "3",
      label: "Can you pay cash on Solo Taxis?",
      children: (
        <p className="faq-answer">
          Yes, we offer both cash and card payment options for your convenience.
        </p>
      ),
    },
    {
      key: "4",
      label: "Is Solo Taxis available 24/7 in Sheffield?",
      children: (
        <p className="faq-answer">
          Yes, Solo Taxis operates 24/7 in Sheffield, ensuring you can get a ride whenever
          you need one, day or night.
        </p>
      ),
    },
    {
      key: "5",
      label: "How do I contact Solo Taxis if I have a question?",
      children: (
        <p className="faq-answer">
          Call us at{" "}
          <span className="text-(--accent) font-medium">{PHONE_DISPLAY}</span> or email{" "}
          <span className="text-(--accent) font-medium">info@solotaxis.co.uk</span>.
        </p>
      ),
    },
  ];

  return (
    <section className="py-16" id="faq">
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-10">
        <div className="text-center flex flex-col items-center gap-2">
          <span className="section-eyebrow">FAQs</span>
          <h2 className="section-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-base max-w-lg">
            Got questions? We've got answers. Here's everything you need to know.
          </p>
        </div>
        <Collapse
          accordion
          items={items}
          bordered={false}
      style={{ background: "transparent" }}
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
          className="bg-transparent"
          expandIconPlacement="end"
          expandIcon={({ isActive }) =>
            isActive ? (
              <span className="flex items-center justify-center w-7 h-7 rounded-full  border border-(--accent)">
                <MinusOutlined style={{ color: "var(--accent)", fontSize: 12 }} />
              </span>
            ) : (
              <span className="flex items-center justify-center w-7 h-7 rounded-full border border-(--accent)">
                <PlusOutlined style={{ color: "var(--accent)", fontSize: 12 }} />
              </span>
            )
          }
        />
      </div>
    </section>
  );
};

export default Faq;