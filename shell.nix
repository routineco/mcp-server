{ sources ? import nix/sources.nix { }
, pkgs ? import sources.nixpkgs { }
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22
    pkgs.yarn
    pkgs.nodePackages.prettier
    pkgs.nodePackages.typescript
  ];
}
