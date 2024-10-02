import fp from "fastify-plugin";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * This plugin adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */

// Get the current directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

export default fp(async function (fastify, opts) {
  await fastify.register(import("@fastify/static"), {
    root: join(__dirname, "..", "public"),
    prefix: "/", // optional: default '/'
    constraints: {}, // optional: default {}
  });
});