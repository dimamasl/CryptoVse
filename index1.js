@@ -2,7 +2,7 @@
authors = ["Solana Maintainers <maintainers@solana.foundation>"]
edition = "2021"
name = "solana-accounts-bench"
version = "1.10.3"
version = "1.10.4"
repository = "https://github.com/solana-labs/solana"
license = "Apache-2.0"
homepage = "https://solana.com/"
@@ -12,11 +12,11 @@ publish = false
clap = "2.33.1"
log = "0.4.14"
rayon = "1.5.1"
solana-logger = { path = "../logger", version = "=1.10.3" }
solana-measure = { path = "../measure", version = "=1.10.3" }
solana-runtime = { path = "../runtime", version = "=1.10.3" }
solana-sdk = { path = "../sdk", version = "=1.10.3" }
solana-version = { path = "../version", version = "=1.10.3" }
solana-logger = { path = "../logger", version = "=1.10.4" }
solana-measure = { path = "../measure", version = "=1.10.4" }
solana-runtime = { path = "../runtime", version = "=1.10.4" }
solana-sdk = { path = "../sdk", version = "=1.10.4" }
solana-version = { path = "../version", version = "=1.10.4" }

[package.metadata.docs.rs]
targets = ["x86_64-unknown-linux-gnu"]
