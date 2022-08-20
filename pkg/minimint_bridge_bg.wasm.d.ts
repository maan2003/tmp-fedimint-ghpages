/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function rustsecp256k1zkp_v0_6_0_musig_partial_sign(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_nonce_process(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_nonce_agg(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_nonce_gen(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function __wbg_wasmclient_free(a: number): void;
export function start(): void;
export function init_(a: number): number;
export function wasmclient_join_federation(a: number, b: number, c: number): number;
export function wasmclient_info(a: number): void;
export function wasmclient_leave_federation(a: number, b: number): void;
export function wasmclient_balance(a: number): number;
export function wasmclient_pay(a: number, b: number, c: number): number;
export function wasmclient_invoice(a: number, b: number): number;
export function __wbg_wasmdb_free(a: number): void;
export function wasmdb_load(a: number, b: number): number;
export function wasmdb_debug(a: number): void;
export function wasmdb_clone(a: number): number;
export function wasmdb_save(a: number): number;
export function decode_invoice(a: number, b: number, c: number): void;
export function rustsecp256k1zkp_v0_6_0_musig_pubkey_agg(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_partial_sig_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_partial_sig_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_adapt(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_extract_adaptor(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_pubnonce_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_pubnonce_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_aggnonce_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_aggnonce_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_partial_sig_agg(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_nonce_parity(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_generator_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_generator_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_rangeproof_info(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_adaptor_decrypt(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_whitelist_signature_serialize(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_whitelist_signature_parse(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_parse(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_serialized_size(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_serialize(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1zkp_v0_6_0_default_error_callback_fn(a: number, b: number): void;
export function rustsecp256k1zkp_v0_6_0_context_preallocated_size(a: number): number;
export function rustsecp256k1zkp_v0_6_0_context_preallocated_clone_size(a: number): number;
export function rustsecp256k1zkp_v0_6_0_context_preallocated_create(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_context_preallocated_clone(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_context_preallocated_destroy(a: number): void;
export function rustsecp256k1zkp_v0_6_0_context_set_illegal_callback(a: number, b: number, c: number): void;
export function rustsecp256k1zkp_v0_6_0_context_set_error_callback(a: number, b: number, c: number): void;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_parse(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_serialize(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_cmp(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_signature_parse_der(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_signature_parse_compact(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_signature_serialize_der(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_signature_serialize_compact(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_signature_normalize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_verify(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_sign(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_seckey_verify(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_create(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_seckey_negate(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_privkey_negate(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_negate(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_seckey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_privkey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_seckey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_privkey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_tweak_mul(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_context_randomize(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_ec_pubkey_combine(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_tagged_sha256(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_cmp(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_from_pubkey(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_tweak_add(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_pubkey_tweak_add_check(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_xonly_sort(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_keypair_create(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_keypair_sec(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_keypair_pub(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_keypair_xonly_pub(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_keypair_xonly_tweak_add(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_schnorrsig_sign(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_schnorrsig_sign_custom(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_schnorrsig_verify(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_adaptor_encrypt(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_adaptor_verify(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_ecdsa_adaptor_recover(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_pubkey_get(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_pubkey_ec_tweak_add(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_pubkey_xonly_tweak_add(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_musig_partial_sig_verify(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_generator_generate(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_generator_generate_blinded(a: number, b: number, c: number, d: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_commitment_parse(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_commitment_serialize(a: number, b: number, c: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_commit(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_blind_sum(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_verify_tally(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1zkp_v0_6_0_pedersen_blind_generator_blind_sum(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_rangeproof_rewind(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number): number;
export function rustsecp256k1zkp_v0_6_0_rangeproof_verify(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function rustsecp256k1zkp_v0_6_0_rangeproof_sign(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number): number;
export function rustsecp256k1zkp_v0_6_0_whitelist_sign(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function rustsecp256k1zkp_v0_6_0_whitelist_verify(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function rustsecp256k1zkp_v0_6_0_whitelist_signature_n_keys(a: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_n_total_inputs(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_n_used_inputs(a: number, b: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_initialize(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_generate(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function rustsecp256k1zkp_v0_6_0_surjectionproof_verify(a: number, b: number, c: number, d: number, e: number): number;
export function rustsecp256k1_v0_5_0_context_create(a: number): number;
export function rustsecp256k1_v0_5_0_context_destroy(a: number): void;
export function rustsecp256k1_v0_5_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_5_0_default_error_callback_fn(a: number, b: number): void;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc4efadc5cdebec50(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6d3576190c79c13b(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h51d735b9192594ed(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbbed2e584bf6b4c8(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he43c5042510a80de(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h21d4c3f9adce6c95(a: number, b: number, c: number): void;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h65094210dba495e4(a: number, b: number, c: number, d: number): void;
export function __wbindgen_start(): void;
