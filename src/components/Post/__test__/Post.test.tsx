import { render, screen } from '@testing-library/react';
import Post from "..";

describe("Testando o componente Post", () => {
    test("Deve renderizar corretamente", () => {
        //Renderiza o componente com os dados inseridos no teste:
        render(<Post imageUrl='https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210237528/batmovel-the-batman-2022-figura-batman-jada-toys-118-com-luzes-59bc3074.jpg'>Teste 1</Post>);

        expect(screen.getByText("Teste 1")).toBeInTheDocument();

        // const postImage = screen.getByAltText("Post");
        // expect(postImage).toBeInTheDocument();
        // expect(postImage).toHaveAttribute(
        //     "src",
        //     "https://cdn.awsli.com.br/2500x2500/2571/2571273/produto/210237528/batmovel-the-batman-2022-figura-batman-jada-toys-118-com-luzes-59bc3074.jpg"
        // );

        expect(screen.getByTestId("post-comments")).toBeInTheDocument();
            });
})