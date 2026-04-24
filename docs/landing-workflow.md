# Landing Iteration Workflow

## Stable Baseline

`main` keeps the current working MVP landing page safe. Use it as the stable
baseline before starting content or layout experiments.

## Branches

`landing-v2-content` is for content-only improvements:

- rewriting landing page texts
- moving copy into a separate content file
- improving clarity without significant layout changes

`landing-v2-layout-nav` should be created later, after the content branch is
stable. Use it for layout and navigation work:

- navbar changes
- mobile burger menu
- section order improvements
- FAQ layout changes
- Results/Cases section layout changes
- final CTA section refinements

## Commit Convention

Use Conventional Commits:

```text
type(scope): short clear summary
```

Allowed types:

- `feat`: new user-facing functionality
- `fix`: bug fix
- `refactor`: code structure change without behavior change
- `docs`: documentation changes
- `style`: visual/CSS formatting changes without logic changes
- `chore`: repository, tooling, config, cleanup, or workflow changes

Keep commits small and focused. Do not commit secrets, `.env` files,
`node_modules`, `dist`, build folders, or local IDE files.
