// Fixture for the kody-rules-create-and-apply E2E scenario.
// Contains intentional TODO_REMOVE_ME markers (one as a string literal,
// one inside a comment) so a rule forbidding the identifier has
// something concrete to flag. Not exported by the public API.

const FORBIDDEN_MARKER = "TODO_REMOVE_ME";

export function legacyCleanup(): string {
    // TODO_REMOVE_ME: drop this whole module once the migration ships.
    return FORBIDDEN_MARKER;
}
