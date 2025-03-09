import Calculator from "ct.frontend/components/Calculator/Calculator";

function Page() {
  return (
    <section className={"p__16 h__max"}>
        <div className={"container__md flex__col g__32 h__max "}>
            <h1
                className={"color__secondary"}
                data-test-id={"hero__title"}
            >
                {"Effortless calculations, anytime, anywhere"}
            </h1>
            <p
                className={"color__secondary weight__sm"}
                data-test-id={"hero__subtitle"}
            >
                {"A simple yet powerful calculator app that performs basic arithmetic operations seamlessly over a network connection"}
            </p>
            <Calculator />
        </div>
    </section>
  );
}

export default Page;