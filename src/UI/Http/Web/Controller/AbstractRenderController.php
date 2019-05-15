<?php

declare(strict_types=1);

namespace App\UI\Http\Web\Controller;

use App\Infrastructure\User\Auth\Auth;
use League\Tactician\CommandBus;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;

class AbstractRenderController
{
    /**
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     */
    protected function render(string $view, array $parameters = [], int $code = Response::HTTP_OK): Response
    {
        $content = $this->template->render($view, $parameters);

        return new Response($content, $code);
    }

    protected function exec($command): void
    {
        $this->commandBus->handle($command);
    }

    protected function ask($query)
    {
        return $this->queryBus->handle($query);
    }
	
	/**
	 * @return \Symfony\Component\Security\Core\User\UserInterface|null
	 */
    protected function user(): Auth
	{
		return $this->security->getUser();
	}

    public function __construct(\Twig_Environment $template, CommandBus $commandBus, CommandBus $queryBus, Security $security)
    {
        $this->template = $template;
        $this->commandBus = $commandBus;
        $this->queryBus = $queryBus;
        $this->security = $security;
    }

    /**
     * @var CommandBus
     */
    private $commandBus;

    /**
     * @var CommandBus
     */
    private $queryBus;

    /**
     * @var \Twig_Environment
     */
    private $template;
    
    /** @var Security */
    private $security;
}
