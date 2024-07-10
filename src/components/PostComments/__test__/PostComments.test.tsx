import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

import PostComments from "..";

describe("Testando o componente PostComments", () => {
    test("Deve adicionar dois comentários", () => {
        render(<PostComments />);

        const commentTextArea = screen.getByRole("textbox"); //Checar depois.

        fireEvent.change(commentTextArea, {
            target: {value: "Comentário número 1"},
        });
        expect(commentTextArea).toHaveValue("Comentário número 1");

        //atribui à variável o elemento botão:
        const submitButton = screen.getByRole("button", {name :/comentar/i})
        //executa o click:
        fireEvent.click(submitButton);

        expect(screen.getByText("Comentário número 1")).toBeInTheDocument();

        //Segundo comentário:

        fireEvent.change(commentTextArea, {
          target: { value: "Comentário número 2" },
        });
        expect(commentTextArea).toHaveValue("Comentário número 2");

        //executa o click:
        fireEvent.click(submitButton);

        expect(screen.getByText("Comentário número 2")).toBeInTheDocument();

        //Checa se há 2 comentários na tela:

        expect(screen.getAllByTestId("post-comment")).toHaveLength(2);

    })
})