interface RocksDbOptsOpen {
  create_if_missing?: boolean,
  error_if_exists?: boolean,
  create_missing_column_families?: boolean,
  paranoid_checks?: boolean,
  use_fsync?: boolean,
  allow_mmap_reads?: boolean,
  allow_mmap_writes?: boolean,
  use_direct_reads?: boolean,
  allow_fallocate?: boolean,
  is_fd_close_on_exec?: boolean,
  advise_random_on_open?: boolean,
  new_table_reader_for_compaction_inputs?: boolean,
  use_adaptive_mutex?: boolean,
  enable_thread_tracking?: boolean,
  allow_concurrent_memtable_write?: boolean,
  enable_write_thread_adaptive_yield?: boolean,
  skip_stats_update_on_db_open?: boolean,
  allow_2pc?: boolean,
  fail_if_options_file_error?: boolean,
  dump_malloc_stats?: boolean,
  avoid_flush_during_recovery?: boolean,
  avoid_flush_during_shutdown?: boolean,
  max_open_files?: number,
  max_file_opening_threads?: number,
  max_total_wal_size?: number,
  base_background_compactions?: number,
  max_background_compactions?: number,
  max_subcompactions?: number,
  max_background_flushes?: number,
  max_log_file_size?: number,
  log_file_time_to_roll?: number,
  keep_log_file_num?: number,
  recycle_log_file_num?: number,
  table_cache_numshardbits?: number,
  WAL_ttl_seconds?: number,
  WAL_size_limit_MB?: number,
  manifest_preallocation_size?: number,
  db_write_buffer_size?: number,
  compaction_readahead_size?: number,
  random_access_max_buffer_size?: number,
  writable_file_max_buffer_size?: number,
  bytes_per_sync?: number,
  wal_bytes_per_sync?: number,
  write_thread_max_yield_usec?: number,
  write_thread_slow_yield_usec?: number,

  readOnly?: boolean
}

interface RocksDbOptsWrite {
  sync?: boolean,
  disableWAL?: boolean,
  ignore_missing_column_families?: boolean,
  no_slowdown?: boolean
}

interface RocksDbOptsRead {
  verify_checksums?: boolean,
  fill_cache?: boolean,
  tailing?: boolean,
  managed?: boolean,
  total_order_seek?: boolean,
  prefix_same_as_start?: boolean,
  pin_data?: boolean,
  background_purge_on_iterator_cleanup?: boolean,
  readahead_size?: number,
  ignore_range_deletions?: boolean,

  buffer?: boolean
}

export interface RocksDb {
  close (): void;

  del (opts: RocksDbOptsWrite, key: string): void;
  get (opts: RocksDbOptsRead, key: string): Buffer | string;
  put (opts: RocksDbOptsWrite, key: string, value: Buffer | string): void;
}

interface RocksDbConstructor {
  open (opts: RocksDbOptsOpen, location: string): RocksDb;
}

declare const rocksdb: RocksDbConstructor;

export default rocksdb;
